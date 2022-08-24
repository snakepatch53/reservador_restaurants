let fetch_query = (formData, entity, operation) => {
    return fetch(`${config.getUrl()}model/script/${entity}/${operation}.php`, {
        method: "POST",
        headers: new Headers().append("Accept", "application/json"),
        body: formData,
    })
        .then((res) => res.json())
        .then((res) => res);
};
