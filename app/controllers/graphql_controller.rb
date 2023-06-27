class GraphqlController < ApplicationController
  protect_from_forgery except: :execute

  def execute
    result = AppSchema.execute(params[:query], variables: params[:variables], operation_name: params[:operationName])
    render json: result
  end
end
