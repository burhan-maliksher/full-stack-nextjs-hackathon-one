// "use client"
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";

type linkProp={
    name:string
}

export default function LinkBtn(props:linkProp ) {
  return (
    <div>
      <NavigationMenuItem className="flex gap-10   ">  
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {props.name}
            </NavigationMenuLink>                    
      </NavigationMenuItem>
    </div>
  )
}
