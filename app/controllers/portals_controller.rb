class PortalsController < ApplicationController
  def index
    @events = Event.all
  end
end
