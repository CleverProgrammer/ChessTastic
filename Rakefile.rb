require 'html/proofer'
# rake test
desc "build and test website"
task :test do
    sh "bundle exec jekyll build"
    HTML::Proofer.new("out/", {:ext => ".htm", :typhoeus => { :verbose => true, :ssl_verifyhost => 2 } })
end
