'use server'
import { CreateDocumentParams } from "@/types";
import { nanoid } from 'nanoid'
import { liveblocks } from "../liveblocks";
import { RoomAccesses } from "@liveblocks/node";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";

export const createDocument = async ({userId , email} : CreateDocumentParams) => {

        const roomId = nanoid()

        try {

            const metadata = {
                creatorId : userId , 
                email: email, 
                title: 'Untitled'
            }

            const usersAccesses : RoomAccesses = {
                [email] : ['room:write']
            }

            const room = await liveblocks.createRoom(roomId, {
                metadata, 
                usersAccesses, 
                defaultAccesses: ['room:read', 'room:presence:write']
            })

            revalidatePath('/')

            return parseStringify(room); 

        } catch (error) {
            console.log("Something went wrong while creating the ROOM")
        }
}