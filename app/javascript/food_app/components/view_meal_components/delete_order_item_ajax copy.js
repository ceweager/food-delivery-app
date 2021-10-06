import { csrfToken } from "@rails/ujs";

const deleteOrderItem = (userId, meal, count) => {
  console.log("meal name", meal.name);
  const postOrderMeal = async () => {
    const orderMeal = await fetch(`http://localhost:3000/api/v1/users/${userId}/order_meals?meal_id=${meal.id}`, {
      method: 'DELETE',
      headers: {
        "X-CSRF-Token": csrfToken(),
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_name: meal.name
      })
    }).then(response => response.json())
      .then((data) => {
        console.log(data)
      })
  }
  postOrderMeal();
}

export default deleteOrderItem;