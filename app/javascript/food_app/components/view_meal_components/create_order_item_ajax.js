import { csrfToken } from "@rails/ujs";

const createOrderItem = (userId, meal, count) => {
  console.log("userId", userId);
  const postOrderMeal = async () => {
    const orderMeal = await fetch(`http://localhost:3000/api/v1/users/${userId}/order_meals`, {
      method: 'POST',
      headers: {
        "X-CSRF-Token": csrfToken(),
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        meal_id: meal.id,
        count: count,
        user_id: userId
      })
    }).then(response => response.json())
      .then((data) => {
        console.log(data)
      })
  }
  postOrderMeal();
}

export default createOrderItem;