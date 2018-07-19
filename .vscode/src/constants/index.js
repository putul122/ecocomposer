const api = {
    getComponentTypes: 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types',
    createUser: 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-account/users',
    registerProcess: 'https://virtserver.swaggerhub.com/JakoMenkveld/ecocomposer-notification/1/processes/',
    getActivityMessage: function (componentTypeId) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + componentTypeId + '/messages?page_size=5&page=1&recommended=false'
    },
    getComponentById: function (componentTypeId) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + componentTypeId
    },
    getComponentConstraint: function (componentTypeId) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + componentTypeId + '/constraints'
    },
    getComponentComponent: function (componentTypeId) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + componentTypeId + '/components'
    },
    getComponent: function (componentTypeId, componentId) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + componentTypeId + '/components/' + componentId
    }
  }

export default api
