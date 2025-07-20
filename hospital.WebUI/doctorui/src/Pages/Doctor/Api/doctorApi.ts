import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ENDPOINT_API, ENDPOINT_DOCTOR_CREATE, ENDPOINT_DOCTOR, ENDPOINT_DOCTOR_CONTROLLER } from "../../../Models/ENDPOINT"
import doctorModel from "../DTOs/doctorModel"


//doctorModel

const doctorApi = createApi({
    reducerPath:"doctorApi",
    baseQuery:fetchBaseQuery({
        baseUrl:`${ENDPOINT_API}/${ENDPOINT_DOCTOR_CONTROLLER}/`
    }),
    tagTypes:["doctors"],
    endpoints:(builder)=>({
        getDoctors:builder.query({
            query:()=>({
                url:`${ENDPOINT_DOCTOR}`
            }),
            providesTags:["doctors"]
        }),
        createDoctor:builder.mutation({
            query:(doctorModel:any) => ({
                url: `${ENDPOINT_DOCTOR_CREATE}`,
                method:"POST",
                body:doctorModel              
            }),
            invalidatesTags:["doctors"]
        }),
        /*getDoctorById:builder.query({
            query:(Id)=>({
                url:`/FindById/${Id}`,
                method:"GET",
            })
        }),
        removeDoctor:builder.mutation({
            query:(id)=> ({
                url: `/Delete/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["doctors"],

        }),
        
        updateDoctor:builder.mutation({            
            query:({doctorModel,Id}) => ({
                url:`Update?Id=${Id}`,
                method:"PUT",
                body:doctorModel
            }),
            invalidatesTags:["doctors"]
        }),*/

    })
})


export const {useGetDoctorsQuery, useCreateDoctorMutation} = doctorApi
export default doctorApi