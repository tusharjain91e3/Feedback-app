import { create } from "domain";
import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document {
    content:string;//small first letter of string
    createdAt:Date;
}
//important syntax for mongoose
const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})
export interface User extends Document {
    username :string;
    email:string;
    password:string;
    verifcationCode:string;
    verificationCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessaging:boolean;
    messages:Message[];
}
const Userschema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match: [/.+@.+\..+/,"Please enter a valid email address"],
        lowercase:true, //convert to lowercase
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    verifcationCode:{
        type:String,
        required:[true,"Verification code is required"],
    },
    verificationCodeExpiry:{
        type:Date,
        required:[true,"Verification code expiry is required"],
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessaging:{
        type:Boolean,
        default:false
    },
    messages:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",Userschema);  
export default UserModel; 