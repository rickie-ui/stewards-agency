const Accordion = () => {
  return (
    <div className=" w-8/12 mx-auto mt-8">
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion" defaultChecked />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus esse magnam impedit tempora odio?</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
    </div>
    
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
    </div>
    <div className="collapse collapse-plus bg-white mt-2 text-[#323C24] border border-base-300">
          <input type="radio" name="accordion"  />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
    </div>
</div>
  )
}

export default Accordion