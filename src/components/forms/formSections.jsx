import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function FormSection() {
    return (
        <div>
            <Tabs defaultValue="Section1" className="w-full">
                <TabsList className="flex justify-center w-full">
                    <TabsTrigger className="w-[740px] h-10 text-[#98a2b3] font-medium text-base leading-5" value="Section1">Section 1</TabsTrigger>
                    <TabsTrigger className="w-[740px] h-10 text-[#98a2b3] font-medium text-base leading-5" value="Section2">Section 2</TabsTrigger>
                </TabsList>
                <TabsContent value="Section1">Make changes to your Section1 here.</TabsContent>
                <TabsContent value="Section2">Change your Section2 here.</TabsContent>
            </Tabs>

        </div>
    );
}