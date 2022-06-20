import useSWR from "swr";

export default function Challenge() {
    const { data } = useSWR(
        "/api/data",
        (...args) => fetch(...args).then((res) => res.json()),
        { suspense: true }
    );

    return <div>{data.status}</div>;
}
