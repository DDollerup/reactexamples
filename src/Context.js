const baseApi = "https://localhost:7272/api/";

export const get = async (endpoint, id) => {
    const result = await fetch(baseApi + endpoint + "/" + id, {
        method: "GET",
        headers: {
            "content-type" : "application/json; charset=UTF-8"
        }
    });
    
    return result.json();
}

export const getAll = async (endpoint) => {
    const result = await fetch(baseApi + endpoint, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    });

    return result.json();
}















export const post = async (endpoint, object) => {
    const result = await fetch(baseApi + endpoint, {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(object)
    });

    return result.json();
}

export const put = async (endpoint, id, object) => {
    const result = await fetch(baseApi + endpoint + "/" + id, {
        method: "PUT",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(object)
    });

    return result.status;
}

export const del = async (endpoint, id) => {
    const result = await fetch(baseApi + endpoint + "/" + id, {
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    });
    return result;
}