class Event < ActiveRecord::Base
  belongs_to :admin

  validates :event_title, presence: true
  validates :admin_id, presence: true
end
