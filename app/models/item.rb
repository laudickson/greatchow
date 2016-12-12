class Item < ActiveRecord::Base
  belongs_to :category
  has_many :options

  validates :name, presence: true
end
