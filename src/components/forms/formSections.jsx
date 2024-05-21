import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MandatoryForm from "./subcomponents/mandatoryForm";
import OptionalForm from "./subcomponents/optionalForm"

export default async function FormSection() {
    return (
        <div className="m-5 lg:m-10 ">
            <Tabs defaultValue="Section1" className="w-full">
                <TabsList className="flex gap-5 justify-center w-full">
                    <TabsTrigger className="h-10 text-[#98a2b3] font-medium text-base leading-5" value="Section1">Section 1</TabsTrigger>
                    <TabsTrigger className="h-10 text-[#98a2b3] font-medium text-base leading-5" value="Section2">Section 2</TabsTrigger>
                </TabsList>
                <TabsContent value="Section1">
                    <MandatoryForm />
                </TabsContent>
                <TabsContent value="Section2">
                    <OptionalForm />
                </TabsContent>
            </Tabs>
        </div>
    );
}