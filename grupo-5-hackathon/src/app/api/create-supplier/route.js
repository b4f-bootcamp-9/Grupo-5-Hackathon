import {CreateSupplier, ReadOneSupplier} from "@/services/suppliers"
import { NextResponse } from "next/server"

export async function POST(req){
    const data = await req.json()
        
    const res  = await CreateSupplier(data)

    return NextResponse.json({response: res}, {status:200})

}
export async function GET(req){
        
    const res  = await ReadOneSupplier()

    return NextResponse.json({response: res}, {status:200})

}
 