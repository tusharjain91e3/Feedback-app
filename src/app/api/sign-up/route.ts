import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
    await dbConnect();
    
    try {   
        const { username, email, password } = await request.json();
        
        // Check if username already exists and is verified
        const existingUserVerifiedByUsername = await UserModel.findOne({ 
            username,
            isVerified: true
        });
        
        if (existingUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: "Username already exists",
            }, { status: 400 });
        }
        
        // Check if user exists by email
        const existingUserByEmail = await UserModel.findOne({ email });
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return Response.json({
                    success: false,
                    message: "User already exists with this email",
                }, { status: 400 });
            } else {
                // Update existing unverified user
                const hashedPassword = await bcrypt.hash(password, 10);
                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.username = username;
                existingUserByEmail.verifcationCode = verificationCode; // Match your User model
                existingUserByEmail.verificationCodeExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
                await existingUserByEmail.save();
                
                // Send verification email
                const emailResponse = await sendVerificationEmail(email, username, verificationCode);
                if (!emailResponse.success) {
                    return Response.json({
                        success: false,
                        message: emailResponse.message || "Failed to send verification email"
                    }, { status: 500 });
                }
                
                return Response.json({
                    success: true,
                    message: "User updated successfully. Please verify your account.",
                }, { status: 200 });
            }
        } else {
            // Create new user
            const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 1);
            
            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifcationCode: verificationCode, // Match your User model (note: has typo but matches your schema)
                verificationCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessaging: true, // Match your User model property name
                messages: []
            });
            
            await newUser.save();
            
            // Send verification email
            const emailResponse = await sendVerificationEmail(email, username, verificationCode);
            if (!emailResponse.success) {
                return Response.json({
                    success: false,
                    message: emailResponse.message || "Failed to send verification email"
                }, { status: 500 });
            }
            
            return Response.json({
                success: true,
                message: "User registered successfully. Please verify your account.",
            }, { status: 201 });
        }
        
    } catch (error) {
        console.error("Error registering user:", error);
        return Response.json({
            success: false,
            message: "Error registering user",
        }, { status: 500 });
    }
}