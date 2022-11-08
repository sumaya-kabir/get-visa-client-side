import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - GET VISA`;
    }, [title])
};

export default useTitle;