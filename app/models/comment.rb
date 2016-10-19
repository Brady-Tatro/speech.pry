class Comment <ApplicationRecord
  belongs_to :speech
  belongs_to :user

  validates :log_time, presence: true
end
