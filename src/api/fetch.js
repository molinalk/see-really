/*BY ME: const validatePromises = (promises) => {
    let result = [];
    promises.forEach(promise => {
        try {
            if (promise.status === "reject" || !promise.value.ok) {
                throw new Error("No se pudo cargar el recurso");
            } else {
                result.push(promise.value);
            }
        } catch (error) {
            console.error(error)
            result.push(null);
        }
    })
    return result;
} */
const validatePromises = async (promises) => {
    const results = await Promise.all(
      promises.map(async (promise) => {
        if (promise.status === "fulfilled" && promise.value.ok) {
          const data = await promise.value.json();
          return data;
        } else {
          console.error("No se pudo cargar el recurso");
          return null;
        }
      })
    );
  
    return results;
  };
export const Fetch = async (promises) => {
    const resolve = await Promise.allSettled(promises);
    return await validatePromises(resolve);
}