class Message < ApplicationRecord
  validates :from, :body, presence: true
  # Code goes here

  def prettify_phone_number
    num_array = self.from.split("")

    area_code = num_array[2..4].join("")
    middle = num_array[5..7].join("")
    last = num_array[8..11].join("")

    "(#{area_code}) #{middle}-#{last}"
  end

  def format_create_at
    date_sent = self.created_at.in_time_zone('Pacific Time (US & Canada)').strftime('%A, %B %e, %Y')
    time_sent = self.created_at.in_time_zone('Pacific Time (US & Canada)').strftime('%I:%M %p')
    "sent on #{date_sent} at #{time_sent}"
  end
end
