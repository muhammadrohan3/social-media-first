import axios from 'axios'
import { View, Text } from "react-native"
import {useEffect, useState} from 'react'


async function apiHook(link) {
    console.log("This is link",link)
    
    const data = await axios.get(link)
    .then(res=>{
    
        return res.data.books
    })
    .catch(err=>{
        console.log("This is err",err)
    })
    console.log("This is data", data)
    return data
}

export default apiHook