def numbers(n)
  array = n.split("")
  s = 0
  array.each_with_index do |val, i|
    if val == 'a' && array[i + 1] == 'e'
      s += 1
    end
  end
  puts s
end

puts numbers("awa df asdf aw ae ae adjkfjeae")
