
import request from 'superagent'

export const CodachiCardAPI = ({ baseUrl }) => ({
  generateCard: async ({ type, name, level }) =>
    (
      await request
        .post(`${baseUrl}/card`)
        .send({
          type,
          name,
          level
        })
    ).body.metadata,
})
