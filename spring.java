import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ordenes")
public class OrdenController {
    @Autowired
    private OrdenRepository ordenRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Orden> getOrden(@PathVariable Long id) {
        Optional<Orden> orden = ordenRepository.findById(id);
        return ResponseEntity.ok(orden.get());
    }

    @GetMapping
    public ResponseEntity<List<Orden>> getAllOrdenes() {
        List<Orden> ordenes = ordenRepository.findAll();
        return ResponseEntity.ok(ordenes);
    }

    @PostMapping
    public ResponseEntity<String> createOrden(@RequestBody Orden orden) {
        ordenRepository.save(orden);
        return ResponseEntity.status(HttpStatus.CREATED).body("Orden creada correctamente");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateOrden(@PathVariable Long id, @RequestBody Orden orden) {
        orden.setId(id);
        ordenRepository.save(orden);
        return ResponseEntity.ok("Orden actualizada correctamente");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrden(@PathVariable Long id) {
        ordenRepository.deleteById(id);
        return ResponseEntity.ok("Orden eliminada correctamente");
    }
}
