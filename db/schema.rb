# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_10_135159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "baskets", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_baskets_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.integer "calories"
    t.integer "cost_to_add"
    t.boolean "default", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "meal_ingredients", force: :cascade do |t|
    t.bigint "meal_id", null: false
    t.bigint "ingredient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id"], name: "index_meal_ingredients_on_ingredient_id"
    t.index ["meal_id"], name: "index_meal_ingredients_on_meal_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.string "nickname"
    t.integer "price"
    t.integer "calories"
    t.integer "time_to_make"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "category_id", null: false
    t.string "url"
    t.index ["category_id"], name: "index_meals_on_category_id"
  end

  create_table "order_meals", force: :cascade do |t|
    t.bigint "meal_id", null: false
    t.bigint "order_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "basket_id"
    t.index ["basket_id"], name: "index_order_meals_on_basket_id"
    t.index ["meal_id"], name: "index_order_meals_on_meal_id"
    t.index ["order_id"], name: "index_order_meals_on_order_id"
  end

  create_table "order_requests", force: :cascade do |t|
    t.bigint "order_meal_id", null: false
    t.bigint "ingredient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ingredient_id"], name: "index_order_requests_on_ingredient_id"
    t.index ["order_meal_id"], name: "index_order_requests_on_order_meal_id"
  end

  create_table "orders", force: :cascade do |t|
    t.boolean "created", default: false
    t.boolean "submitted", default: false
    t.boolean "prep_start", default: false
    t.boolean "prep_complete", default: false
    t.boolean "cooking_start", default: false
    t.boolean "cooking_complete", default: false
    t.boolean "delivery_start", default: false
    t.boolean "delivery_complete", default: false
    t.integer "rating", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.text "address"
    t.boolean "staff"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "baskets", "users"
  add_foreign_key "meal_ingredients", "ingredients"
  add_foreign_key "meal_ingredients", "meals"
  add_foreign_key "meals", "categories"
  add_foreign_key "order_meals", "baskets"
  add_foreign_key "order_meals", "meals"
  add_foreign_key "order_meals", "orders"
  add_foreign_key "order_requests", "ingredients"
  add_foreign_key "order_requests", "order_meals"
  add_foreign_key "orders", "users"
end
