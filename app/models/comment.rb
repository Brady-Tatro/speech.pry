class Comment <ApplicationRecord
  belongs_to :speech
  belongs_to :user

  validates :time, presence: true
end
