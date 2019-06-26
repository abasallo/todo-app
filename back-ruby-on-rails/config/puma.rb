threads_count = ENV.fetch('RAILS_MAX_THREADS') { 5 }.to_i
threads threads_count, threads_count # Should match default thread size of Active Record
port        ENV.fetch('PORT') { 3000 }
environment ENV.fetch('RAILS_ENV') { 'development' }
plugin :tmp_restart # Allow puma to be restarted by `rails restart` command.
