\# Git Workflow



\## 1. Final calculateTicketPrice function



The final calculateTicketPrice function combines the changes from all three contributors.



The rounding behavior came from Clone B. It changed the calculation so ticket prices are rounded instead of simply truncated.



The 10% group discount came from Clone A. Orders of 5 or more tickets receive a 10% discount.



The 50% VIP surcharge came from Clone C. Premium seating increases the total by 50%.



The flat $10 discount came from Clone A's later change during Task 6. It is applied after the other price adjustments.



All of these changes are now included in the final shared function.



\## 2. Task 3 vs Task 5 conflicts



Task 3 involved two contributors, so the conflict was between the group discount and rounding changes.



Task 5 was harder because there were three separate lines of work. The group discount and rounding already had to be preserved, and the VIP surcharge from the third contributor also had to be added. This meant there were more behaviors to check and make sure they worked together correctly.



With three contributors, it was more important to understand what each change was supposed to do instead of simply choosing one side of the conflict.



\## 3. Why the flat $10 discount affected other tests



The flat $10 discount was added inside the shared calculateTicketPrice function. Because the group discount and VIP surcharge also use this same function, changing the final calculation changes the result of those tests too.



This shows that changes in shared code are not completely isolated. Even if a developer adds one small feature, it can affect other existing behaviors that use the same function. This is why tests need to be updated and run after integrating changes.



\## 4. Process change that could prevent the rejected pushes



A useful process change would be to always fetch and synchronize with the remote branch before starting new work or pushing changes.



If all three contributors regularly pulled or fetched the latest changes before working and pushing, they would be less likely to work from an outdated branch. A team could also use pull requests so changes are reviewed and integrated before another contributor starts work based on an old version.

