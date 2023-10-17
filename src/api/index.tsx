
// GET: https://retoolapi.dev/pIADsc/data
// POST: curl -X POST -H 'Content-Type: application/json' -d '{"key":"value"}' https://retoolapi.dev/pIADsc/data
// PUT: curl -X PUT -H 'Content-Type: application/json' -d '{"key":"value"}' https://retoolapi.dev/pIADsc/data/1
// PATCH: curl -X PATCH -H 'Content-Type: application/json' -d '{"key":"value"}' https://retoolapi.dev/pIADsc/data/1
// DELETE: curl -X DELETE https://retoolapi.dev/pIADsc/data/1

const API_URL = 'https://retoolapi.dev/pIADsc'

const getJobs = async () => {
  try {
    const response = await fetch(`${API_URL}/data`)
    const result = await response.json();
    return result;
  } catch(error) {
    console.error(error)
    return []
  }
}

const updateStatus = async (payload: {
  id: number,
  isActive: boolean
}) => {
  try {
    const update = await fetch(
      `${API_URL}/data/${payload.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload)
      })

      return await update.json() 
  } catch(error) {
    console.error(error)
  }
}

export {
  getJobs,
  updateStatus
}