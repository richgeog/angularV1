require 'sinatra'

get '/' do
  send_file 'public/views/index.html'
end