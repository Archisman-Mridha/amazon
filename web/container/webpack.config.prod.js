const withModuleFederation = require("@nrwl/react/module-federation")
const moduleFederationConfig = require("./module-federation.config")

module.exports = withModuleFederation({
    ...moduleFederationConfig,

    remotes: [["shared", "//d1no0am0y2ggol.cloudfront.net/shared/"]]
})