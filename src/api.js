import request from "superagent"

export const CodachiCardAPI = ({ baseUrl }) => ({
  generateCard: async ({ type, name, level }) =>
    request.post(`${baseUrl}/card`).send({
      type,
      name,
      level,
    })
    .set('Accept', 'application/json'),
})
