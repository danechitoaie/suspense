import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Challenge = dynamic(() => import("../components/Challenge"), {
    suspense: true,
    ssr: false,
});

const Index: NextPage = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Challenge />
        </Suspense>
    );
};

export default Index;
