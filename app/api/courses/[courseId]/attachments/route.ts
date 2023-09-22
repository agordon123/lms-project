import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

/**
 * Handles the POST request for creating a new attachment for a course.
 * @param req - The request object.
 * @param params - An object containing the courseId parameter.
 * @returns A JSON response containing the created attachment object, or an error response if there was an issue.
 */
export async function POST(req:Request,{params}:{params:{courseId:string}}){
    try {
        const {userId} = auth();
        const {url} = await req.json();
        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }
        const courseOwner = await db.course.findUnique({
            where:{
                id:params.courseId,
                userId:userId
            },
            
        });
        if(!courseOwner){
            return new NextResponse("Unauthorized",{status:401});
        }
        const attachment = await db.attachment.create({
            data:{
                url,
                name:url.split("/").pop(),
                courseId:params.courseId
            }
        });
        console.log(attachment);
        return NextResponse.json(attachment);
    } catch (error) {
        console.log("[attachmentId] error",error);
        return new NextResponse("Internal Server Error",{status:500});
    }

}