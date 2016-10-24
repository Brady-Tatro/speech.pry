class Api::V1::CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @speech = Speech.find_by(params[:id])
    @comment.speech_id = @speech.id
    @comment.user_id = current_user.id
    if @comment.save
     flash[:notice] = 'Success!'
   else
     binding.pry
     @comment.errors.any?
     flash[:alert] = @comment.errors.full_messages.join("\n")
   end
  end

  private

  def comment_params
    params.require(:fullComment).permit(:time, :comment)
  end
end
