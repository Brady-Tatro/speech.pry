require 'factory_girl_rails'

FactoryGirl.define do
  factory :user do
    sequence(:username) { |n| "PartyBoy200#{n}" }
    sequence(:email) { |n| "partyeva#{n}@launchacademy.com" }
    sequence(:password) { |n| "123#{n}4567" }
  end
  factory :speech do
    sequence(:title) { |n| "speaking"}
    sequence(:media) { "https://www.youtube.com/watch?v=FWnTJjAKwdY&index=28&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue" }
  end
end
