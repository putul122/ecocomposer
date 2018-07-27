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
    getComponent: function (payload) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/component_types/' + payload.componentTypeId + '/components/' + payload.componentTypeComponentId
    },
    getComponentProperty: function (payload) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/components/' + payload.componentTypeComponentId + '/properties'
    },
    getComponentRelationships: function (payload) {
        return 'https://ecocomposermockapis.azurewebsites.net/ecocomposer-meta-model/components/' + payload.componentTypeComponentId + '/componentrelationships'
    }
  }

export default api
