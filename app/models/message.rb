class Message < ApplicationRecord
  validates :from, :body, presence: true
  # Code goes here
end
