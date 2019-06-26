class ApplicationController < ActionController::API
  include Secured

  rescue_from Exception do |exception|
    case exception
      when ActiveRecord::RecordNotFound
        render json: { message: exception.message }, status: :not_found
      when ActiveRecord::ActiveRecordError
        render json: { message: exception.message }, status: :unprocessable_entity
      when Exception
        render json: { message: exception.message }, status: :internal_server_error
    end
  end
end
