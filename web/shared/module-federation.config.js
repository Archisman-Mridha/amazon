module.exports = {
    name: "shared",
    exposes: {
        "./navbar": "./src/components/navbar/navbar.component.tsx"
    },
    shared: dependencyName => {

        if(dependencyName === "react-icons")
            return false
    }
}