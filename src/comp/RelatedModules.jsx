import React, {useEffect, useState} from 'react'
import { client } from '../lib/pocketbase';

export const RelatedModules = (parms) => {
    const subModule = parms.parent;

    useEffect(() => {
        client.collection("modules").getList(1,200, {
            filter : 'parent =  "' + subModule.expand.parent.id + '"&& active = true'
        }).then((res)=>console.log(res))
    }, []);
  return (
    <div>RelatedModules {subModule.name}</div>
  )
}
