class User < ApplicationRecord
has_many :speeches
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

 validates :username, uniqueness: true, presence: true
 validates :email, uniqueness: true, presence: true
 validates :password, presence: true
end
