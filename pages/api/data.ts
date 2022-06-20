import { CosmosClient } from "@azure/cosmos";
import type { NextApiRequest, NextApiResponse } from "next";

type DataOk = {
    status: "OK";
    data: any;
};

type DataError = {
    status: "ERROR";
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataOk | DataError>) {
    res.setHeader("Cache-Control", "public, s-maxage=59, stale-while-revalidate=86400");
    res.status(200).json({
        status: "OK",
        data: {
            challenge: "Ok",
            locations: "Ok",
        },
    });
}
