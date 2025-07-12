import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

//doctorModel

const doctorApi = createApi({
    reducerPath:"doctorApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://localhost:7027/api/Doctor/"
    }),
    tagTypes:["doctors"],
    endpoints:(builder)=>({
        getDoctors:builder.query({
            query:()=>({
                url:"doctorlar"
            }),
            providesTags:["doctors"]
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
        createDoctor:builder.mutation({
            query:(doctorModel:any) => ({
                url:"Create",
                method:"POST",
                body:doctorModel              
            }),
            invalidatesTags:["doctors"]
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


export const {useGetDoctorsQuery} = doctorApi
export default doctorApi