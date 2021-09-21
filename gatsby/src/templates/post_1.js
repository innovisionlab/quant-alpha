import React from "react"
import { graphql } from "gatsby"
import Image from "../components/Image"
import Heading from "../components/Heading"

//import Layout from "../components/layout"
//import SEO from "../components/seo"

const components = {
    Image: Image,
    Heading: Heading
}

function ucwords(text) {
    let str = text.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, 
        function (s){
            return s.toUpperCase();
        });
}

const postTemplate = (data) => {
    
    //console.log(data);
    const elementorData = JSON.parse(data.pageContext.elementorData);
    
    
    const Page = elementorData.map(row => {
        console.log({row});
        
        return (
                
                <div key={row.id} className="row">
                    {
                        row.elements.map(column => {
                            
                            console.log({column});
                            
                            return (
                                    <div key={column.id} className={"elementor-col-"+column.settings._column_size}>
                                        {
                                            column.elements.map(widget=>{
                                                
                                                return (
                                                        React.createElement(
                                                        components[ucwords(widget.widgetType)], 
                                                        {
                                                                    ...widget.settings,
                                                                    key: widget.id
                                                        }
                                                        )
                                                        )
                                            })
                                        }
                                    </div>    
                                )
                        })
                    }
                </div>
                
                )
    })
    
    return Page;
}


export default postTemplate