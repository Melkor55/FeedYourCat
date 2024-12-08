#!/bin/bash

data='[
  {
    "name": "Whiskas Dry Cat Food",
    "brand": "Whiskas",
    "description": "A crunchy and nutritious dry food for adult cats.",
    "imageUrl": "https://example.com/whiskas-dry-cat-food.jpg",
    "ingredients": "Chicken, Corn, Rice, Soybean Meal, Animal Fat",
    "price": 19.99,
    "specialDiet": "High-Protein",
    "catAge": "adult",
    "quantity": 4.5,
    "foodType": "dry",
    "packageType": "bag"
  },
  {
    "name": "Purina Pro Plan Kitten Wet Food",
    "brand": "Purina",
    "description": "A high-nutrient formula for growing kittens.",
    "imageUrl": "https://example.com/purina-pro-plan-kitten.jpg",
    "ingredients": "Chicken, Fish, Liver, Brown Rice, Carrots",
    "price": 15.49,
    "specialDiet": "High-Calcium",
    "catAge": "kitten",
    "quantity": 0.9,
    "foodType": "wet",
    "packageType": "can"
  },
  {
    "name": "Hill'\''s Science Diet Cat Food",
    "brand": "Hill'\''s",
    "description": "Veterinarian-recommended formula for senior cats.",
    "imageUrl": "https://example.com/hills-science-diet.jpg",
    "ingredients": "Chicken, Rice, Barley, Pea Fiber, Fish Oil",
    "price": 34.99,
    "specialDiet": "Weight Control",
    "catAge": "senior",
    "quantity": 3.0,
    "foodType": "dry",
    "packageType": "bag"
  },
  {
    "name": "Blue Buffalo Wilderness Wet Cat Food",
    "brand": "Blue Buffalo",
    "description": "Grain-free wet food with real salmon for adult cats.",
    "imageUrl": "https://example.com/blue-buffalo-wet-food.jpg",
    "ingredients": "Salmon, Chicken Broth, Potatoes, Peas, Carrots",
    "price": 28.99,
    "specialDiet": "Grain-Free",
    "catAge": "adult",
    "quantity": 2.1,
    "foodType": "wet",
    "packageType": "can"
  },
  {
    "name": "Royal Canin Hairball Care",
    "brand": "Royal Canin",
    "description": "Specially designed dry food to reduce hairball formation.",
    "imageUrl": "https://example.com/royal-canin-hairball.jpg",
    "ingredients": "Chicken Meal, Rice, Corn Gluten, Fish Oil, Beet Pulp",
    "price": 29.99,
    "specialDiet": "Hairball Control",
    "catAge": "adult",
    "quantity": 3.6,
    "foodType": "dry",
    "packageType": "bag"
  },
  {
    "name": "Sheba Perfect Portions Wet Cat Food",
    "brand": "Sheba",
    "description": "Conveniently portioned wet cat food with rich flavors.",
    "imageUrl": "https://example.com/sheba-perfect-portions.jpg",
    "ingredients": "Turkey, Chicken Broth, Liver, Tapioca Starch, Minerals",
    "price": 12.99,
    "specialDiet": "No Artificial Flavors",
    "catAge": "adult",
    "quantity": 1.5,
    "foodType": "wet",
    "packageType": "tray"
  },
  {
    "name": "IAMS Proactive Health Indoor Cat Food",
    "brand": "IAMS",
    "description": "Balanced nutrition for less active indoor cats.",
    "imageUrl": "https://example.com/iams-indoor-cat-food.jpg",
    "ingredients": "Chicken, Turkey, Rice, Beet Pulp, Fish Meal",
    "price": 23.99,
    "specialDiet": "Indoor Formula",
    "catAge": "adult",
    "quantity": 5.0,
    "foodType": "dry",
    "packageType": "bag"
  },
  {
    "name": "Natural Balance Limited Ingredient Cat Food",
    "brand": "Natural Balance",
    "description": "Limited ingredient dry food for cats with food sensitivities.",
    "imageUrl": "https://example.com/natural-balance-cat-food.jpg",
    "ingredients": "Duck, Peas, Potato, Chicken Fat, Flaxseed",
    "price": 31.99,
    "specialDiet": "Limited Ingredient",
    "catAge": "all ages",
    "quantity": 4.0,
    "foodType": "dry",
    "packageType": "bag"
  },
  {
    "name": "Friskies Gravy Lovers Wet Cat Food",
    "brand": "Friskies",
    "description": "Wet food with extra gravy for picky eaters.",
    "imageUrl": "https://example.com/friskies-gravy-lovers.jpg",
    "ingredients": "Chicken, Meat By-Products, Wheat Gluten, Broth, Vitamins",
    "price": 17.99,
    "specialDiet": "None",
    "catAge": "adult",
    "quantity": 3.2,
    "foodType": "wet",
    "packageType": "can"
  },
  {
    "name": "Wellness CORE RawRev Cat Food",
    "brand": "Wellness CORE",
    "description": "High-protein dry food with freeze-dried raw meat.",
    "imageUrl": "https://example.com/wellness-core-rawrev.jpg",
    "ingredients": "Deboned Turkey, Chicken Meal, Lentils, Peas, Raw Chicken",
    "price": 42.99,
    "specialDiet": "High-Protein",
    "catAge": "adult",
    "quantity": 2.5,
    "foodType": "dry",
    "packageType": "bag"
  }
]'

echo "$data" | jq -c '.[]' | while read item; do
  curl -X POST -H "Content-Type: application/json" -d "$item" http://localhost:3000/api/foods
done
