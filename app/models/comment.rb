class Comment <ApplicationRecord
  belongs_to :speech, optional: true

  validates :time, presence: true
end
