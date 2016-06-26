class EventsController < ApplicationController
  def index
    @events = Event.order(created_at: :desc)
  end

  def new
    @event = Event.new
  end

  def create
    @event = current_admin.events.build(event_params)
    if @event.save
      redirect_to portals_path
    else
      flash[:error] =
      @event.errors.full_messages.join('. ')
      render action: 'new'
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      flash[:notice] = 'Event has been updated'
      redirect_to portals_path
    else
      flash[:error] = @event.errors.full_messages.join('. ')
      render :edit
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    flash[:notice] = 'Event has been deleted'
    redirect_to portals_path
  end


  private
  def event_params
    params.require(:event).permit(:event_title, :body)
  end
end
