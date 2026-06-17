const form = document.getElementById("request-form");

form.addEventListener("input", () => {
    sessionStorage.setItem(
        "projectForm",
        JSON.stringify(
            Object.fromEntries(
                new FormData(form)
            )
        )
    );
});

const saved = JSON.parse(
    sessionStorage.getItem("projectForm") || "{}"
);

for (const [name, value] of Object.entries(saved)) {
    const field = form.elements[name];
    if (field) field.value = value;
}