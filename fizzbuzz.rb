i = 0
loop do
  i += 1
  if i % 5 == 0 && i % 3 == 0
  	puts "FizzBuzz"
  elsif i % 5 == 0
  	puts "Buzz"
  elsif i % 3 == 0
  	puts "Fizz"
  else  	
  print "#{i}"
end
  break if i >=100 
end